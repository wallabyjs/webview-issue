# Webview Issue Sample

Demonstrates an issue with VS Code's [webview API](https://code.visualstudio.com/api/extension-guides/webview).

## Running the example

- Open this example in VS Code 1.47+
- `npm install`
- `npm run watch` or `npm run compile`
- `F5` to start debugging

Run the `Webview Issue: Reproduce Webview Issue` to create the webview.

Note the time displayed in the webview:

```
Expected time to update: 500ms
Actual time to update: 500ms
```

The two times should be similar.

Close and re-open the webview multiple times. Eventually, the actual time will update at ~1000ms instead of 500ms.