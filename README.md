node-diskusage
==============
[![Build Status](https://travis-ci.org/amilajack/node-diskusage.svg?branch=master)](https://travis-ci.org/amilajack/node-diskusage)
[![Build status](https://ci.appveyor.com/api/projects/status/4ddhl0l7aif37xw9/branch/master?svg=true)](https://ci.appveyor.com/project/amilajack/node-diskusage/branch/master)

This module implements platform specific bindings to obtain disk usage information on Windows and POSIX platforms. Windows support is backed by [GetDiskFreeSpaceEx](http://msdn.microsoft.com/en-us/library/windows/desktop/aa364937/) and POSIX is implemented with [statvfs](http://www.freebsd.org/cgi/man.cgi?query=statvfs).

## Installation
```bash
$ npm install @amilajack/diskusage
```

## Usage

The module exposes two functions. `check` takes a path/mount point as the first argument and a callback as the second. The callback takes two arguments `err` and `info`. `err` will be an `Error` if something went wrong. `info` contains three members: `available`, `free` and `total` in bytes.

- `available`: Disk space available to the current user (i.e. Linux reserves 5% for root)
- `free`: Disk space physically free
- `total`: Total disk space (free + used)

`checkSync` only takes the path argument. It returns the same `info` on success, throws an `Error` on failure.

## Examples
```js
import disk from '@amilajck/diskusage';
import os from 'os';

const path = os.platform() === 'win32' ? 'c:' : '/';
const info = disk.checkSync(path);
console.log(info.available);
console.log(info.free);
console.log(info.total);
```
