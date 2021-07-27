module.exports = {
    vue: (convertedHTML) => {
        return `
            <template>
                <div>
                    ${convertedHTML}
                </div>
            </template>

            <style></style>

            <script>
                export default {}
            </script>
        `
    }
};
