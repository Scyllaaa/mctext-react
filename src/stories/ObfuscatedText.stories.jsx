import { ObfuscatedText } from '../index.js';

export default {
    title: 'Components/ObfuscatedText',
    component: ObfuscatedText,
};

export const UsingChildren = {
    render: () => <ObfuscatedText>Secret Text</ObfuscatedText>,
};

export const UsingTextProp = {
    render: () => <ObfuscatedText text="Secret Text" />,
};

export const WithCustomRandomChars = {
    render: () => <ObfuscatedText randomChars="!@#$%^&*">Secret Text</ObfuscatedText>,
};
