module.exports = class {
    convertVue(convertedHTML) {
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
        `;
    };
};

// 不推荐这个，建议使用 ./base-vue.js
