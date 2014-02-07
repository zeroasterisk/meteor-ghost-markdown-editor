Package.describe({
  summary: "Ghost Markdown Editor. See https://github.com/timsayshey/Ghost-Markdown-Editor."
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('CodeMirror');
  }
  where = where || ['client'];
  api.add_files('lib/ghost-markdown-editor/ghostdown.js', where);
  api.add_files('lib/ghost-markdown-editor/jquery.ghostdown.js', where);
  api.add_files('export-codemirror.js', where);
});
