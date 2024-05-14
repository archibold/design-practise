import React from "react";
import CashInput from "../../src/app/ui/card/components/cashInput";
import "../../src/app/tailwind-generated.css";

describe("<CashInput />", () => {
    it("renders", () => {
        const onChangeSpy = cy.spy().as("onChangeSpy");

        cy.mount(<CashInput onChangeCash={onChangeSpy} />);
        cy.get("input").type("2343");
        cy.get("input").should("have.value", "2,343");

        cy.get("input").clear().type("100000000.356");
        cy.get("input").should("have.value", "100,000,000.35");
    });
});
