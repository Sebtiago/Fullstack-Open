sequenceDiagram
    participant Navegador as Browser
    participant Servidor as Server

    Note over Navegador,Servidor: Cargando la página con JavaScript
    Navegador->>Servidor: GET /exampleapp/notes
    Servidor-->>Navegador: HTML document
    Navegador->>Servidor: GET /exampleapp/main.css
    Servidor-->>Navegador: CSS file
    Navegador->>Servidor: GET /exampleapp/main.js
    Servidor-->>Navegador: JavaScript file
    Navegador->>Servidor: GET /exampleapp/data.json
    Servidor-->>Navegador: JSON data
    Note right of Navegador: Renderiza las notas usando DOM-API

    Note over Navegador,Servidor: Añadiendo una nueva nota y dar clic en el botón Save.
    Navegador->>Servidor: POST /exampleapp/new_note (nota)
    Servidor-->>Navegador: HTTP 302 redirect to /notes
    Navegador->>Servidor: GET /exampleapp/notes
    Servidor-->>Navegador: HTML document
    Navegador->>Servidor: GET /exampleapp/main.css
    Servidor-->>Navegador: CSS file
    Navegador->>Servidor: GET /exampleapp/main.js
    Servidor-->>Navegador: JavaScript file
    Navegador->>Servidor: GET /exampleapp/data.json
    Servidor-->>Navegador: JSON data (incluye nueva nota)
    Note right of Navegador: Renderiza todas las notas, incluyendo la nueva
