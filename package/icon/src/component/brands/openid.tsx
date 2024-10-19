
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `openid` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/openid?s=brands openid}
 * @preview ![openid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzEuNSA0MzJsLTY4IDMyQzg4LjUgNDUzLjcgMCAzOTIuNSAwIDMxOC4yYzAtNzEuNSA4Mi41LTEzMSAxOTEuNy0xNDQuM3Y0M2MtNzEuNSAxMi41LTEyNCA1My0xMjQgMTAxLjMgMCA1MSA1OC41IDkzLjMgMTM1LjcgMTAzdi0zNDBsNjgtMzMuMnYzODR6TTQ0OCAyOTFsLTEzMS4zLTI4LjUgMzYuOC0yMC43Yy0xOS41LTExLjUtNDMuNS0yMC03MC0yNC44di00M2M0Ni4yIDUuNSA4Ny43IDE5LjUgMTIwLjMgMzkuM2wzNS0xOS44TDQ0OCAyOTF6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Openid(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2c0-71.5 82.5-131 191.7-144.3v43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103v-340l68-33.2v384zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8v-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8L448 291z" />
        </Icon>
    </>
}