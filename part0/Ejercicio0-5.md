sequenceDiagram
    participant Navegador as Browser
    participant Servidor as Server

    Note over Navegador,Servidor: Usuario abre la página SPA
    Navegador->>Servidor: GET /exampleapp/spa
    Servidor-->>Navegador: HTML + spa.js
    Navegador->>Servidor: GET /exampleapp/data.json
    Servidor-->>Navegador: JSON data
    Note right of Navegador: Navegador renderiza las notas usando DOM-API