import fs from 'fs';
for (const module of fs.readdirSync('node_modules')) {
  if (module.startsWith('js-combinatorics')) {
    const pkg = fs.readFileSync(`node_modules/${module}/package.json`);
    const json = JSON.parse(pkg.toString());
    if (json.module && !json.type) {
      json.type = 'module';
      fs.writeFileSync(`node_modules/${module}/package.json`, JSON.stringify(json));
    }
  }
}
