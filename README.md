# brettle:workaround-issue-4970

[![Build Status](https://travis-ci.org/brettle/meteor-accounts-workaround-issue-4970.svg?branch=master)](https://travis-ci.org/brettle/meteor-accounts-workaround-issue-4970)

Workaround [Meteor issue #4970](https://github.com/meteor/meteor/issues/4970) so
that a logged in user failing to login will not break auto-login on reconnect.

## Installation

```sh
meteor add brettle:workaround-issue-4970
```

## Usage

Just install it and it should work.

## How it Works

It registers an `onLogin` handler that remembers the current value of
`Accounts.connection.onReconnect` and an `onLoginFailure` handler that restores
it after `Accounts.callLoginMethod()` erroneously sets it to `null`.
