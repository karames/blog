// prettier.config.mjs
// Configuración por defecto de Prettier para JavaScript y CSS (ESM)

export default {
  // Configuración global (puede ser mínima, ya que overrides cubre los casos)
  // Si quieres que todo use los defaults, puedes dejar esto vacío o solo documentar

  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        quoteProps: "as-needed",
        jsxSingleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        proseWrap: "preserve",
        endOfLine: "lf",
        embeddedLanguageFormatting: "auto",
        singleAttributePerLine: false,
      },
    },
    {
      files: ["*.css", "*.scss", "*.less"],
      options: {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        bracketSameLine: false,
        arrowParens: "always",
        endOfLine: "lf",
        singleAttributePerLine: false,
        // cssWhitespaceSensitivity solo aplica a HTML, pero se puede dejar documentado
      },
    },
  ],
};
