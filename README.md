
# Gif Expert App

Este proyecto presenta una aplicación web desarrollada con [Next](https://nextjs.org/) que permite a los usuarios buscar y visualizar GIFs de manera intuitiva. La aplicación busca proporcionar una interfaz de usuario amigable que permita a los usuarios realizar búsquedas de GIFs de manera rápida y precisa.
## Tecnologías utilizadas

 - [React](https://es.react.dev/)
 - [Next](https://nextjs.org/)
 - [TypeScript](https://www.typescriptlang.org/)


## Consideraciones técnicas

Se optó por utilizar Next debido a su declarativa y eficiente forma de crear interfaces de usuario, así como por su gran comunidad y ecosistema de herramientas. El hook ``useState`` fue la elección natural para gestionar el estado local de la información obtenida a travez de la peticiión al API de [GIPHY](https://giphy.com/), ya que es sencillo de usar y se integra perfectamente con el paradigma de React.

**Para el futuro, se podrían explorar las siguientes mejoras:**

- **Personalización:** Permitir que el usuario pueda seleccionar un tema.

- **Renderización de GIFs:**  Implementar la renderización de GIFs de manera eficiente para evitar tiempos de carga largos. 


## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/johndev983/gif-expert-app.git
```

Ir al directorio del proyecto

```bash
  cd gif-expert-app
```

Instalar dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run start
```

Iniciar el servidor con [Docker](https://docs.docker.com/)

```bash
  docker build -t next-gif-expert-app .
```


## Demo

[https://gif-expert-app.vercel.app/](https://gif-expert-app-liart.vercel.app/)


## Authors

- [@johndev983](https://github.com/johndev983)


## Support

Para obtener ayuda, envíe un correo electrónico a johndev983@gmail.com.

