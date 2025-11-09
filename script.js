const form = document.getElementById('searchForm');
const results = document.getElementById('results');
const list = document.getElementById('universities');

const universities = {
  Njemačka: {
    IT: ["Technical University of Munich", "RWTH Aachen University"],
    Biznis: ["University of Mannheim", "Frankfurt School of Finance"],
    Umjetnost: ["Berlin University of the Arts"],
    Inžinjerstvo: ["Karlsruhe Institute of Technology"],
    Medicina: ["Charité – Universitätsmedizin Berlin"]
  },
  Francuska: {
    IT: ["École Polytechnique", "Université Paris-Saclay"],
    Biznis: ["HEC Paris", "INSEAD"],
    Umjetnost: ["Sorbonne University", "ENSAD Paris"],
    Inžinjerstvo: ["CentraleSupélec", "Grenoble INP"],
    Medicina: ["Université de Lyon", "Université de Montpellier"]
  },
  Italija: {
    IT: ["Politecnico di Milano", "Sapienza University of Rome"],
    Biznis: ["Bocconi University", "University of Bologna"],
    Umjetnost: ["Accademia di Belle Arti di Firenze"],
    Inžinjerstvo: ["Politecnico di Torino"],
    Medicina: ["University of Padua"]
  },
  Nizozemska: {
    IT: ["Delft University of Technology", "Eindhoven University of Technology"],
    Biznis: ["Erasmus University Rotterdam", "University of Amsterdam"],
    Umjetnost: ["Design Academy Eindhoven"],
    Inžinjerstvo: ["University of Twente"],
    Medicina: ["Leiden University"]
  },
  Španija: {
    IT: ["Polytechnic University of Catalonia", "University of Granada"],
    Biznis: ["IE Business School", "ESADE"],
    Umjetnost: ["Complutense University of Madrid"],
    Inžinjerstvo: ["University of Valencia"],
    Medicina: ["University of Barcelona"]
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  const country = document.getElementById('country').value;
  const field = document.getElementById('field').value;
  list.innerHTML = '';
  if (country && field && universities[country][field]) {
    universities[country][field].forEach(u => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = u;
      list.appendChild(li);
    });
    results.classList.remove('d-none');
  } else {
    list.innerHTML = '<li class="list-group-item text-danger text-center">Nema rezultata za odabrane kriterije.</li>';
    results.classList.remove('d-none');
  }
});
