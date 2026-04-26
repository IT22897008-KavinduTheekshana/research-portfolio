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
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
