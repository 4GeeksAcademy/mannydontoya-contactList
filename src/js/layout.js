import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AddContacts } from "./views/addContacts";
import { EditContact } from "./views/editContact";
import { Contacts } from "./views/contacts";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Contacts />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/add" element={<AddContacts />} />
                        <Route path="/edit/:id" element={<EditContact />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);