
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `van-shuttle` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/van-shuttle?s=regular van-shuttle}
 * @preview ![van-shuttle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik02MjUuMTY0IDIwNi4xNzJMNDk5LjE4OSA1NS4wMjNDNDg3LjAyOSA0MC40MzYgNDY5LjAxOCAzMiA0NTAuMDI1IDMySDY0QzI4LjgwMSAzMiAwIDYwLjc5OSAwIDk2VjMyMEMwIDM1NS4xOTkgMjguODAxIDM4NCA2NCAzODRDNjQgNDM3LjAyIDEwNi45OCA0ODAgMTYwIDQ4MFMyNTYgNDM3LjAyIDI1NiAzODRIMzg0QzM4NCA0MzcuMDIgNDI2Ljk4IDQ4MCA0ODAgNDgwUzU3NiA0MzcuMDIgNTc2IDM4NEM2MTEuMTk5IDM4NCA2NDAgMzU1LjE5OSA2NDAgMzIwVjI0Ny4xNDZDNjQwIDIzMi4xNzIgNjM0Ljc1IDIxNy42NzQgNjI1LjE2NCAyMDYuMTcyWk00NjIuMzE0IDg1Ljc1Nkw1NTUuNjUyIDE5MkgzNzZWODBINDUwLjAyM0M0NTQuNzcxIDgwIDQ1OS4yNzUgODIuMTA5IDQ2Mi4zMTQgODUuNzU2Wk0zMjggMTkySDIxNlY4MEgzMjhWMTkyWk02NCA4MEgxNjhWMTkySDQ4Vjk2QzQ4IDg3LjE2MiA1NS4xNjQgODAgNjQgODBaTTE2MCA0MzJDMTMzLjUzMyA0MzIgMTEyIDQxMC40NjcgMTEyIDM4NFMxMzMuNTMzIDMzNiAxNjAgMzM2UzIwOCAzNTcuNTMzIDIwOCAzODRTMTg2LjQ2NyA0MzIgMTYwIDQzMlpNNDgwIDQzMkM0NTMuNTMzIDQzMiA0MzIgNDEwLjQ2NyA0MzIgMzg0UzQ1My41MzMgMzM2IDQ4MCAzMzZTNTI4IDM1Ny41MzMgNTI4IDM4NFM1MDYuNDY3IDQzMiA0ODAgNDMyWk01NzYgMzM2SDU2Mi42ODZDNTQ2LjA1NSAzMDcuNDI2IDUxNS40NDMgMjg4IDQ4MCAyODhTNDEzLjk0NSAzMDcuNDI2IDM5Ny4zMTQgMzM2SDI0Mi42ODZDMjI2LjA1NSAzMDcuNDI2IDE5NS40NDMgMjg4IDE2MCAyODhTOTMuOTQ1IDMwNy40MjYgNzcuMzE0IDMzNkg2NEM1NS4xNjQgMzM2IDQ4IDMyOC44MzYgNDggMzIwVjI0MEg1OTJWMzIwQzU5MiAzMjguODM2IDU4NC44MzYgMzM2IDU3NiAzMzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function VanShuttle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M625.164 206.172L499.189 55.023C487.029 40.436 469.018 32 450.025 32H64C28.801 32 0 60.799 0 96V320C0 355.199 28.801 384 64 384C64 437.02 106.98 480 160 480S256 437.02 256 384H384C384 437.02 426.98 480 480 480S576 437.02 576 384C611.199 384 640 355.199 640 320V247.146C640 232.172 634.75 217.674 625.164 206.172ZM462.314 85.756L555.652 192H376V80H450.023C454.771 80 459.275 82.109 462.314 85.756ZM328 192H216V80H328V192ZM64 80H168V192H48V96C48 87.162 55.164 80 64 80ZM160 432C133.533 432 112 410.467 112 384S133.533 336 160 336S208 357.533 208 384S186.467 432 160 432ZM480 432C453.533 432 432 410.467 432 384S453.533 336 480 336S528 357.533 528 384S506.467 432 480 432ZM576 336H562.686C546.055 307.426 515.443 288 480 288S413.945 307.426 397.314 336H242.686C226.055 307.426 195.443 288 160 288S93.945 307.426 77.314 336H64C55.164 336 48 328.836 48 320V240H592V320C592 328.836 584.836 336 576 336Z" />
        </Icon>
    </>
}