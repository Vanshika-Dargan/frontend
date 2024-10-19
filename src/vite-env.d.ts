/// <reference types="vite/client" />
// vite-env.d.ts or globals.d.ts
declare module '*.svg?react' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

