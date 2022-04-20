const stringToPath = (path: string): string[] => {
    if (typeof path !== 'string') return [];

    const output = path.split('.').reduce((acc: string[], item: string) => {
        const arrayWithBracketNotation = item.split(/\[([^}]+)\]/g);
        const result = arrayWithBracketNotation.filter((key) => key.length > 0);

        return [...acc, ...result];
    }, []);

    return output;
};

export default stringToPath;
