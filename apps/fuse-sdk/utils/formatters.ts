export function filterOnlyObjectPropertiesBNtoNumber(obj: any) {
  const cleanAssetWithBNs: any[] = Object.entries(obj).filter(([k]: any) =>
    isNaN(k)
  );

  // const assetObject = Object.fromEntries(
  //   cleanAssetWithBNs
  //   ) as any;

  // const final = Object.keys(assetObject).map((key) => typeof assetObject[key] === "object" ? [key, assetObject[key].toString()] : [key, assetObject[key]])

  return Object.fromEntries(cleanAssetWithBNs);
}

export function filterOnlyObjectProperties(obj: any) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k]) => isNaN(k as any))
  ) as any;
}
