import { Suspense } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Header } from "./components/Header/Header";
import { MetaProvider, Title } from "@solidjs/meta";

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <main>
            <Title>yakusho.dev</Title>
            <Header />
            <Suspense>
              {props.children}
            </Suspense>
          </main>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
