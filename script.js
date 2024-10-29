document.addEventListener("DOMContentLoaded", function () {
    // Toggle collapsible sections
    const collapsibles = document.querySelectorAll(".collapsible h3");
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    });

    // Generate feedback button functionality
    document.getElementById("generateFeedback").addEventListener("click", function (event) {
        event.preventDefault();

        function getSelectedFeedback(name) {
            const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
            return Array.from(checkboxes).map(checkbox => checkbox.value);
        }

        const wellDoneReportQuality = getSelectedFeedback("wellDoneReportQuality").join(", ");
        const wellDoneLiteratureReview = getSelectedFeedback("wellDoneLiteratureReview").join(", ");
        const wellDoneAimsObjectives = getSelectedFeedback("wellDoneAimsObjectives").join(", ");
        const wellDoneMethods = getSelectedFeedback("wellDoneMethods").join(", ");
        const wellDoneOutputs = getSelectedFeedback("wellDoneOutputs").join(", ");
        const wellDoneProfessionalism = getSelectedFeedback("wellDoneProfessionalism").join(", ");
        const improveReportQuality = getSelectedFeedback("improveReportQuality").join(", ");
        const improveLiteratureReview = getSelectedFeedback("improveLiteratureReview").join(", ");
        const improveAims = getSelectedFeedback("improveAims").join(", ");
        const improveMethods = getSelectedFeedback("improveMethods").join(", ");
        const improveOutputs = getSelectedFeedback("improveOutputs").join(", ");
        const improveProfessionalism = getSelectedFeedback("improveProfessionalism").join(", ");

        let feedbackMessage = "";

        if (wellDoneReportQuality || wellDoneLiteratureReview || wellDoneAimsObjectives || wellDoneMethods || wellDoneOutputs || wellDoneProfessionalism) {
            feedbackMessage += "<h3>What Was Well Done:</h3>";
            if (wellDoneReportQuality) feedbackMessage += `<p><strong>Overall Report Quality:</strong> ${wellDoneReportQuality}</p>`;
            if (wellDoneLiteratureReview) feedbackMessage += `<p><strong>Literature Review:</strong> ${wellDoneLiteratureReview}</p>`;
            if (wellDoneAimsObjectives) feedbackMessage += `<p><strong>Aim and Objectives:</strong> ${wellDoneAimsObjectives}</p>`;
            if (wellDoneMethods) feedbackMessage += `<p><strong>research methods:</strong> ${wellDoneMethods}</p>`;
            if (wellDoneOutputs) feedbackMessage += `<p><strong>Outputs and digital assets:</strong> ${wellDoneOutputs}</p>`;
            if (wellDoneProfessionalism) feedbackMessage += `<p><strong>Professionalism :</strong> ${wellDoneProfessionalism}</p>`;
        }

        if (improveReportQuality || improveLiteratureReview || improveAims || improveMethods || improveOutputs || improveProfessionalism) {
            feedbackMessage += "<h3>What to Improve:</h3>";
            if (improveReportQuality) feedbackMessage += `<p><strong>Overall Report Quality:</strong> ${improveReportQuality}</p>`;
            if (improveLiteratureReview) feedbackMessage += `<p><strong>Literature Review:</strong> ${improveLiteratureReview}</p>`;
            if (improveAims) feedbackMessage += `<p><strong>Aim and Objectives:</strong> ${improveAims}</p>`;
            if (improveMethods) feedbackMessage += `<p><strong>Research methods:</strong> ${improveMethods}</p>`;
            if (improveOutputs) feedbackMessage += `<p><strong>Outputs and digital assets:</strong> ${improveOutputs}</p>`;
            if (improveProfessionalism) feedbackMessage += `<p><strong>Professionalism:</strong> ${improveProfessionalism}</p>`;
        }

        document.getElementById("feedbackOutput").innerHTML = feedbackMessage || "Please select feedback for at least one section.";
    });

    // Clear feedback button functionality
    document.getElementById("clearFeedback").addEventListener("click", function () {
        document.getElementById("feedbackOutput").innerHTML = "";
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => checkbox.checked = false);
    });
});
