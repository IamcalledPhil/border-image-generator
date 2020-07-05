export function assignDValueFromStrokeType (strokeType){
  switch (strokeType){
    case 1:
      return `M0,6.73S8.61,3.1,11.16,3.24s13,.94,15.2,1.07S50.69,1.62,50.69,1.62s-21.24.41-23.12,0S12.64-.13,11.3,0,0,6.73,0,6.73Z`;
    case 2:
      return `M3.25.19,13.74,1.38,0,2.57S10.93,4.74,14.17,4.41a45.37,45.37,0,0,1,7,0l14-1.84S23.58.63,21.2.19,3.25.19,3.25.19Z`;
    case 3: 
      return `M0,8.28S10.62,3.4,16.12,3.19s4-2.7,8.54-3.12a17.69,17.69,0,0,1,11,2.81c3,1.76,20.67,2.91,20.67,2.91S37,11.4,34.71,11.29s-10.62-.83-13.47-.41S0,8.28,0,8.28Z`;
    case 4: 
      return `M0,12.9S12.11,1.8,23.74,2,36.8,6.21,48.67,7.35,65.29-.16,78.82,0,112.3,12.9,112.3,12.9,88.56,17,79.06,17.15s-41.78.65-48.67,0S0,12.9,0,12.9Z`;
    case 5:
      return `M0,10.74s8.51-4.84,13.56-7C16.9,2.32,19.77,1.85,22.92,1A35.66,35.66,0,0,1,34.69.12c12.9.77,14.68,3.24,20.68,5.31a74.52,74.52,0,0,1,11.57,5.31S62,11.9,51.37,12.42s-31.58,1-36.25.65S0,10.74,0,10.74Z`;
    default:
      return ``;
    }
};

export function assignTranslateYFromStrokeType (strokeType, index){
  let y = 0;
  switch (strokeType){
    case 1:
      y = 15;
      break;
    case 2:
      y= 18;
      break;
    case 3: 
      y= 14;
      break;
    case 4: 
      y= 8;
      break;
    case 5:
      y= 8;
      break;
    default:
      y= ``;
    }

    if (index % 2 === 0){
      y+=8;
    }

    return y
}



export function assignTranslateXFromStrokeType (strokeType, index, x){
  switch (strokeType){
    case 1:
      x += 2;
      break;
    case 2:
      x += 38;
      break;
    case 3: 
      x += 8;
      break;
    case 4: 
      x += 0;
      break;
    case 5:
      x += 0;
      break;
    default:
      break;    
    }
    
    if (index % 2 !== 0){
      x+=14;
    }

    return x;
}