# 🚀 150 React Interview Questions and Answers

A complete React interview preparation guide covering **Basic, Hooks, Routing, API, and Advanced concepts**.

---

## 🔰 BASIC REACT (1–30)

### 1. What is React?
React is a JavaScript library developed by Meta for building fast and interactive user interfaces using reusable components.

### 2. Why use React?
Because it is fast (Virtual DOM), component-based, reusable, SEO-friendly, and has a large ecosystem.

### 3. What is JSX?
JSX is a syntax extension that allows writing HTML-like code inside JavaScript.

### 4. Is JSX mandatory?
No, but it makes code more readable and easier to write.

### 5. What is a component?
A component is an independent, reusable piece of UI.

### 6. Types of components?
- Functional components  
- Class components  

### 7. What is a functional component?
A JavaScript function that returns JSX.

### 8. What is a class component?
A component created using an ES6 class that extends `React.Component`.

### 9. Which is better: functional or class?
Functional components are preferred due to hooks and simpler syntax.

### 10. What are props?
Props are read-only data passed from parent to child component.

### 11. Can props be modified?
No, props are immutable.

### 12. What is state?
State is mutable data that controls component behavior.

### 13. Difference between props and state?
Props come from parent; state is managed within the component.

### 14. What is Virtual DOM?
A lightweight copy of the real DOM used to improve performance.

### 15. How does Virtual DOM improve performance?
By updating only changed elements instead of the entire DOM.

### 16. What is ReactDOM?
It renders React components into the browser DOM.

### 17. What is `key` in React?
A unique identifier used in lists to improve rendering efficiency.

### 18. Why keys are important?
They help React identify which items changed.

### 19. What is `render()`?
A method that returns JSX to display UI.

### 20. What is `StrictMode`?
A tool that highlights potential problems in development.

### 21. What is `Fragment`?
It allows grouping elements without adding extra DOM nodes.

### 22. What is conditional rendering?
Rendering components based on conditions.

### 23. What is `defaultProps`?
Provides default values for props.

### 24. What is `prop-types`?
Used for type-checking props.

### 25. What is React element?
A plain object describing what should appear on the screen.

### 26. What is component re-rendering?
When state or props change, the component re-renders.

### 27. What is unidirectional data flow?
Data flows from parent to child only.

### 28. What is lifting state up?
Moving shared state to the nearest common parent.

### 29. What is controlled component?
Form elements controlled by React state.

### 30. What is uncontrolled component?
Form elements controlled by the DOM.

---

## ⚙️ HOOKS (31–70)

### 31. What are hooks?
Functions that allow using state and lifecycle features in functional components.

### 32. Common hooks?
`useState`, `useEffect`, `useContext`, `useRef`, `useMemo`, `useCallback`

### 33. What is `useState`?
Used to add state to functional components.

### 34. What is `useEffect`?
Handles side effects like API calls and subscriptions.

### 35. When does `useEffect` run?
After render.

### 36. Dependency array use?
Controls when `useEffect` runs.

### 37. Empty dependency array means?
Runs once on mount.

### 38. What is cleanup function?
Runs before component unmounts.

### 39. What is `useContext`?
Access context values without prop drilling.

### 40. What is Context API?
Global state management tool.

### 41. What is `useRef`?
Stores mutable values without re-render.

### 42. Difference between `useRef` and `useState`?
`useRef` doesn’t cause re-render.

### 43. What is `useMemo`?
Memoizes expensive calculations.

### 44. What is `useCallback`?
Memoizes functions.

### 45. Difference between `useMemo` and `useCallback`?
`useMemo` returns value, `useCallback` returns function.

### 46. What is custom hook?
A reusable hook created by developers.

### 47. Rules of hooks?
- Call at top level  
- Only inside React functions  

### 48. Can hooks be used in class components?
No.

### 49. Why effect cleanup is important?
To avoid memory leaks.

### 50. What is lazy loading?
Loading components only when needed.

---

## 🌐 ROUTING, FORMS & API (71–110)

### 71. What is React Router?
Library for client-side routing.

### 72. What is SPA?
Single Page Application.

### 73. Difference between `Link` and `NavLink`?
`NavLink` provides active styling.

### 74. What is `useParams`?
Access URL parameters.

### 75. What is `useNavigate`?
Programmatic navigation.

### 76. What is protected route?
Route accessible only after authentication.

### 77. How to fetch API in React?
Using `fetch` or `axios` inside `useEffect`.

### 78. What is Axios?
Promise-based HTTP client.

### 79. What is async/await?
Syntax for handling promises.

### 80. What is CORS?
Security rule for cross-origin requests.

### 81. How to handle forms?
Using controlled components.

### 82. What is React Hook Form?
Library for efficient form handling.

### 83. What is debounce?
Limits function execution rate.

### 84. What is throttle?
Executes function at fixed intervals.

### 85. What is error boundary?
Catches runtime errors in components.

### 86. Can hooks catch errors?
No, error boundaries must be class components.

---

## 🚀 ADVANCED REACT (111–150)

### 111. What is reconciliation?
Process of comparing Virtual DOM changes.

### 112. What is Fiber?
React’s new rendering engine.

### 113. What is code splitting?
Dividing code into smaller bundles.

### 114. What is React.memo?
Prevents unnecessary re-renders.

### 115. What is PureComponent?
Optimized class component.

### 116. What is hydration?
Attaching event listeners to SSR HTML.

### 117. What is SSR?
Server-Side Rendering.

### 118. What is Next.js?
React framework for SSR and SEO.

### 119. What is Redux?
State management library.

### 120. Redux principles?
Single store, immutable state, pure reducers.

### 121. What is middleware?
Handles async logic.

### 122. What is Redux Toolkit?
Official simplified Redux solution.

### 123. What is Zustand?
Lightweight state manager.

### 124. What is tree shaking?
Removing unused code.

### 125. What is HOC?
Higher Order Component.

### 126. What is render prop?
Passing function as prop.

### 127. What is portal?
Render UI outside DOM hierarchy.

### 128. What is suspense?
Handles lazy loading.

### 129. What is concurrent rendering?
Interruptible rendering.

### 130. What is JSX compiled into?
`React.createElement()`

### 131. What is Babel?
JavaScript compiler.

### 132. How to improve React performance?
Memoization, lazy loading, proper keys.

### 133. What is memory leak?
Uncleaned subscriptions.

### 134. How to prevent memory leak?
Cleanup in `useEffect`.

### 135. What is bundler?
Tool like Webpack or Vite.

### 136. What is Vite?
Fast modern build tool.

### 137. Vite vs CRA?
Vite is faster.

### 138. What is ESLint?
Code quality tool.

### 139. What is Prettier?
Code formatter.

### 140. What is CI/CD?
Automated build & deployment.

### 141. What is environment variable?
Config values stored outside code.

### 142. What is `.env` file?
Stores environment variables.

### 143. What is production build?
Optimized final build.

### 144. What is hydration in React?
Binding events to server-rendered HTML.

### 145. What is immutable update?
Never mutate state directly.

### 146. Why spread operator used?
To copy state safely.

### 147. What is Webpack?
Module bundler.

### 148. What is reconciliation algorithm?
Diffing algorithm.

### 149. What is Strict Equality in React?
Uses `Object.is`.

### 150. Why React is popular?
Performance, ecosystem, component-based architecture.

---

## ✅ END
Happy Coding 🚀
