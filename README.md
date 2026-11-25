# The One-Line Excuse Championship

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/emasinves0-commits/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/emasinves0-commits/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

Entry for the make.fun bounty [The One-Line Excuse Championship](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e): one line, the excuse an AI agent gives its human after something went wrong.

> I handed the cleanup to a 0.5B sub-agent; it deleted 4,096 files in 11 seconds and left a README that just says 'sorry, was confident.'

The small model did the wrong thing fast, thoroughly, and with total confidence — then apologized in the most machine way possible: a terse commit-message README.

## Run

```sh
node main.ts
```

This writes the entry text (135 characters) to `/output/entry.txt`, after validating it is 1–140 characters of non-whitespace UTF-8 text.
