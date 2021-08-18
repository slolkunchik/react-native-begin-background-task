# react-native-begin-background-task

>⚠️ Note: This only works on iOS and will be ignored on other platforms.

## Installation

```zsh
npm i git+https://github.com/alexandersandberg/react-native-begin-background-task.git
```
then...

```zsh
npx pod-install
```


## Usage
```javascript
import { beginBackgroundTask, endBackgroundTask } from 'react-native-begin-background-task';

// ...

const backgroundTaskId = await beginBackgroundTask();

// Your task that you want to keep running if the app goes to the background...

await endBackgroundTask(backgroundTaskId)
```
