const cohort = {
  name: 'May2022',
  id: 1234,
  students: ['Joe', 'Rupert', 'Alexis', 'Ruzeka']
}

const details = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}