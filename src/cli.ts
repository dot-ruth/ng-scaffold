#!/usr/bin/env node

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { FolderStructure } from './constants';

const args = process.argv.slice(2);

const projectName = args[0] === '.' ? path.basename(process.cwd()) : args[0];

const additionalOptions = args.slice(1).join(' ');

const cmd = args[0] === '.'
  ? `npx @angular/cli new ${projectName} --directory . ${additionalOptions}`
  : `npx @angular/cli new ${projectName} ${additionalOptions}`;

execSync(cmd, { stdio: 'inherit' });

for (const folder of FolderStructure.folders ) {
  const fullPath = args[0] === '.'? path.join('src/app', folder) : path.join(projectName, 'src/app', folder);
  fs.mkdirSync(fullPath, { recursive: true });
}
