export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    app.injectContentManagerComponent("listView", "actions", {
      name: "DraftFilterButton",
      Component: () => <div>Hello in Draft Filter</div>,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PublicationWorkflow",
      Component: () => <div>Hello in PublicationWorkflow</div>,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: () => <div>Hello in PreviewButton</div>,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: () => <div>Hello in TweetButton</div>,
    });
  },
};
