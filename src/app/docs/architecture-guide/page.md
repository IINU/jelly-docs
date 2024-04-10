---
title: Architecture guide
nextjs:
  metadata:
    title: Architecture guide
    description: How to structure your feature modules and components to fully leverage the power JellyUI.
---

Your architecture is the foundation of your application. It's the structure that holds everything together, and it's the key to building a maintainable, scalable, and efficient solution.

---

## Core Tenets

- **Modularity**: Break your application into small, reusable modules that can be easily combined to create new features.
- **Reusability**: Write components that can be used in multiple places throughout your application.
- **Scalability**: Design your architecture to grow with your application, allowing you to add new features without rewriting existing code.
- **Extensibility**: Make it easy to extend your application with new functionality, whether that's through plugins, hooks, or other mechanisms.

### Modularity

Modularity is the practice of breaking your application into small, reusable modules that can be easily combined to create new features. This makes it easier to manage complexity, test individual pieces of your application, and reuse code across different parts of your application.

```js
// Example of a feature module
import { JellyButton } from 'jelly-ui';
import { getFeature } from './getFeature';

export default function Feature() {
  return (
    <div>
      <JellyButton onClick={getFeature}>
        Click me
      </JellyButton>
    </div>
  );
}
```

### Reusability

Reusability is the practice of writing components that can be used in multiple places throughout your application. This reduces the amount of code you need to write, makes it easier to maintain your application, and ensures consistency across your user interface.

```js
// Example of a reusable component
import { JellyButton } from 'jelly-ui';

export default function MyButton({ children, ...props }) {
  return (
    <JellyButton {...props}>
      {children}
    </JellyButton>
  );
}
```


### Scalability

Scalability is the practice of designing your architecture to grow with your application. This means that you can add new features without rewriting existing code, and that your application can handle increased traffic and data without slowing down or breaking.

```js
src/
  ├── services/
  │   ├── api.ts
  │   └── index.ts
  ├── styles/
  │   ├── global.css
  │   └── theme.ts
  ├── utils/
  │   ├── helpers.ts
  │   └── index.ts
  ├── App.tsx
  └── index.tsx
```

### Extensibility

Extensibility is the practice of making it easy to extend your application with new functionality. This could be through plugins, hooks, or other mechanisms that allow you to add new features without changing existing code.

```js
// Example of an extensible architecture
import { JellyButton } from 'jelly-ui';

```

---

## Quos porro ut molestiae

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Voluptatem quas possimus

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Id vitae minima

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.

---

## Vitae laborum maiores

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Corporis exercitationem

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Possimus saepe veritatis sint nobis et quam eos. Architecto consequatur odit perferendis fuga eveniet possimus rerum cumque. Ea deleniti voluptatum deserunt voluptatibus ut non iste. Provident nam asperiores vel laboriosam omnis ducimus enim nesciunt quaerat. Minus tempora cupiditate est quod.

### Reprehenderit magni

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

Voluptas beatae omnis omnis voluptas. Cum architecto ab sit ad eaque quas quia distinctio. Molestiae aperiam qui quis deleniti soluta quia qui. Dolores nostrum blanditiis libero optio id. Mollitia ad et asperiores quas saepe alias.
