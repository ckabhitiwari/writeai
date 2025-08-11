
import "../styles/index.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />


        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Uxora - IT Solution & Technology Next JS Temaptle</title>
        <meta name="description" content="Uxora - IT Solution & Technology Next JS Temaptle" />

      </head>
      <body data-new-gr-c-s-check-loaded="14.1228.0" data-gr-ext-installed="">
        {children}
      </body>
    </html>
  );
}
