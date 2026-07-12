const data = [
  { id: "v1", weight: 3, price: 90000, grade: "Grade A", label: "A grade mango 3kg approx 12 mangos" },
  { id: "v2", weight: 5, price: 150000, grade: "Grade A", label: "A grade mango 5kg approx 20 mangos" },
  { id: "v3", weight: 10, price: 300000, grade: "Grade A", label: "A grade mango 10kg approx 40 mangos" },
  { id: "v4", weight: 3, price: 60000, grade: "Grade B", label: "B grade mango 3kg approx 15 mangos" },
  { id: "v5", weight: 5, price: 100000, grade: "Grade B", label: "B grade mango 5kg approx 25 mangos" },
  { id: "v6", weight: 10, price: 200000, grade: "Grade B", label: "B grade mango 10kg approx 50 mangos" }
];

let activeVariant = data[0];

const changeGrade = (newGrade) => {
    const newVariant = data.find(v => v.grade === newGrade && v.weight === activeVariant.weight) || data.find(v => v.grade === newGrade);
    activeVariant = newVariant;
    console.log("New price:", activeVariant.price / 100);
}

changeGrade("Grade B");
changeGrade("Grade A");
