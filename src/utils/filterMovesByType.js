export function filterMovesByType(data, typeFilter) {
    if (!typeFilter) {
      return data;
    }
  
    return data.filter(move => move.type.name.includes(typeFilter));
  }
  