const fs = require('fs')
const msgPath = process.env.GIT_PARAMS
const chalk = require('chalk')
const msg = fs.readFileSync(msgPath, 'utf8').trim()

if (!/测试/.test(msg)) {
  console.error(
    chalk.red('提交的时候commit msg不是测试！')
  )
  process.exit(1)
}

