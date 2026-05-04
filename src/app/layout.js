import "../../styles.css";

export const metadata = {
  title: "AspireAI – Career Guidance System for Sri Lanka | SLIIT",
  description: "AspireAI – AI-powered career guidance for Sri Lankan students. SLIIT Faculty of Computing research project 2025, featuring XGBoost stream recommendation, ARIMA Z-score forecasting, and NLP soft-skill assessment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
