module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter component name:"
      },
      {
        type: "confirm",
        name: "isBaseComponent",
        message: "Is it a base component?",
      },
    ],
    actions: function (data) {
      let actions = [];

      if (data.isBaseComponent) {
        actions.push({
          type: 'add',
          path: 'src/components/base/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/Component.tsx.hbs',
        },
          {
            type: 'add',
            path: `src/components/base/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
            templateFile: 'templates/component/stories.ts.hbs',
          }
        );
      } else {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/Component.tsx.hbs',
        }, {
          type: 'add',
          path: `src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx`,
          templateFile: 'templates/component/stories.ts.hbs',
        });
      }

      return actions;
    },
  });
};
