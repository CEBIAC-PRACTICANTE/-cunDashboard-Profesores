const catedraColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const plantaColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const catedraCategories = [
  { type: 'tarea 1', amount: 0, color: catedraColors[0] },
  { type: 'tarea 2', amount: 0, color: catedraColors[1] },
  { type: 'tarea 3', amount: 0, color: catedraColors[2] },
  { type: 'tarea 4', amount: 0, color: catedraColors[3] },
  { type: 'tarea 5', amount: 0, color: catedraColors[4] },
  { type: 'tarea 6', amount: 0, color: catedraColors[5] },
  { type: 'tarea 7', amount: 0, color: catedraColors[6] },
  { type: 'tarea 8', amount: 0, color: catedraColors[7] },
  { type: 'tarea 9', amount: 0, color: catedraColors[8] },
];

export const plantaCategories = [
  { type: 'tarea 1', amount: 0, color: catedraColors[0] },
  { type: 'tarea 2', amount: 0, color: catedraColors[1] },
  { type: 'tarea 3', amount: 0, color: catedraColors[2] },
  { type: 'tarea 4', amount: 0, color: catedraColors[3] },
  { type: 'tarea 5', amount: 0, color: catedraColors[4] },
  { type: 'tarea 6', amount: 0, color: catedraColors[5] },
  { type: 'tarea 7', amount: 0, color: catedraColors[6] },
  { type: 'tarea 8', amount: 0, color: catedraColors[7] },
  { type: 'tarea 9', amount: 0, color: catedraColors[8] },
  { type: 'tarea 10', amount: 0, color: catedraColors[9] },
  { type: 'tarea 11', amount: 0, color: catedraColors[10] },
];

export const resetCategories = () => {
    catedraCategories.forEach((c) => c.amount = 0);
    plantaCategories.forEach((c) => c.amount = 0);
};