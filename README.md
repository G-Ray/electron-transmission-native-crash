# Crash reproduction

On Windows:
```sh
npm i
npm run package
```

Then try to run `out\electron-transmission-native-win32-x64\electron-transmission-native` from:

- A Terminal : the console should display the transmission version.
- From the file explorer by double-cliking on the exe: the app crashes.

I tried to debug with `WinDbg`, and get a crash log with `Security check failure or stack buffer overrun`.

It seems to works well on Linux.