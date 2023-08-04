import { Suspense } from "react";
import { BrowserRouter, HashRouter, Router, Route, Routes } from "react-router-dom";

// components
import Header from "./components/nav/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";

const App = () => {
	return (
		
		<BrowserRouter>
      		<Suspense fallback={null}>
			<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/AboutMe" element={<AboutMe />} />
					<Route path="/Experience" element={<Experience />} />
				</Routes>
			<Footer/>
			</Suspense>
		</BrowserRouter>
		
	);
};

export default App;
