const fs = require('fs')

void (async () => {
  for (let i = 1; i < 100; i++) {
    await fs.promises.copyFile(
      'src/0.test.js',
      `src/${i}.test.js`
    )
  }
})()
