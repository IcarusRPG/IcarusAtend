import { spawn } from 'node:child_process';

const commands = [
  { name: 'api', args: ['--workspace', 'apps/api', 'run', 'dev'] },
  { name: 'web', args: ['--workspace', 'apps/web', 'run', 'dev'] }
];

const processes = commands.map((cmd) => {
  const child = spawn('npm', cmd.args, { stdio: ['inherit', 'pipe', 'pipe'] });

  child.stdout.on('data', (chunk) => process.stdout.write(`[${cmd.name}] ${chunk}`));
  child.stderr.on('data', (chunk) => process.stderr.write(`[${cmd.name}] ${chunk}`));

  return child;
});

const shutdown = () => {
  for (const proc of processes) {
    if (!proc.killed) proc.kill('SIGINT');
  }
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
