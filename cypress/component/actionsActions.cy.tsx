import React from "react";
import Actions from "../../src/app/ui/card/components/actions";
import "../../src/app/tailwind-generated.css";

describe("<Actions />", () => {
    it("renders on 500x500", () => {
        cy.mount(<Actions canContinue />);
        cy.get("button").eq(0).should("be.hidden");
        cy.get("button")
            .eq(1)
            .should("not.be.hidden")
            .and("have.text", "Continue");
    });

    it("renders on 1600x1600", () => {
        cy.viewport(1600, 1600);
        cy.mount(<Actions canContinue />);
        cy.get("button")
            .eq(0)
            .should("not.be.hidden")
            .and("have.text", "Cancel");
        cy.get("button")
            .eq(1)
            .should("not.be.hidden")
            .and("have.text", "Continue");
    });
});
