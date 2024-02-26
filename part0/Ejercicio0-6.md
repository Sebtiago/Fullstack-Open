sequenceDiagram
    participant Navegador as Browser
    participant Servidor as Server

    Note over Navegador,Servidor: Usuario abre la página SPA
    Navegador->>Servidor: GET /exampleapp/spa
    Servidor-->>Navegador: HTML + spa.js
    Navegador->>Servidor: GET /exampleapp/data.json
    Servidor-->>Navegador: JSON data
    Note right of Navegador: Navegador renderiza las notas usando DOM-API

    Note over Navegador,Servidor: Usuario añade una nueva nota
    Note right of Navegador: JavaScript previene recargar la pagina
    Navegador->>Navegador: Añade nota localmente y re-renderiza
    Navegador->>Servidor: POST /new_note_spa (JSON data)
    Servidor-->>Navegador: 201 Created
    Note right of Navegador: Navegador mantiene la misma página, sin recargas

    Note over Navegador,Servidor: La interacción es asíncrona
    Note right of Navegador: sendToServer() maneja la comunicación
