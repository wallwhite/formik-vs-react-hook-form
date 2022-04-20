import stringToPath from '@/utils/stringToPath';

const getValueByPath = <ObjectType extends ObjectLiteralType, ExpectedValueType>(
    path: string,
    object: ObjectType | null | undefined,
): ExpectedValueType | null => {
    if (!object) return null;

    const normalizedPath = stringToPath(path);

    let cachedValue = object;

    for (let i = 0; i < normalizedPath.length; i++) {
        if (!cachedValue[normalizedPath[i]]) return null;

        cachedValue = cachedValue[normalizedPath[i]];
    }

    return (cachedValue as unknown) as ExpectedValueType;
};

export default getValueByPath;
