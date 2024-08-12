// input: name: string "my-repo-name"
// output: "My repo name"
export const useFormatRepoName = (name: string) => {
    const words = name.split("-");
    return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};