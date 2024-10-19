
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hand-heart` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=light hand-heart}
 * @preview ![hand-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMjUuNDYzIDI4OEMzMTIuNjE5IDI4OCAzMDAuMDEgMjkyLjUzMSAyODcuODU0IDMwMS40NjlDMjc1LjY5NyAyOTIuNTMxIDI2My4wODggMjg4IDI1MC4yNDQgMjg4QzIyMi44OTggMjg4IDE5NS4wNzEgMzEwLjkwOSAxOTUuMDcxIDM0My44MjJDMTk1LjA3MSAzNTguNzI0IDIwMS4xMDIgMzczLjA5NyAyMTEuODM4IDM4My42NTZMMjY5LjgwNyA0NDAuNUMyNzQuNzc2IDQ0NS41IDI4MS4zMjIgNDQ3Ljk2OSAyODcuOTAxIDQ0Ny45NjlDMjk0LjQxNiA0NDcuOTY5IDMwMC45NDcgNDQ1LjUzMSAzMDUuOTYzIDQ0MC42NTZMMzY0LjE1MSAzODMuNTYyQzM3NC43MzggMzczLjA0OCAzODAuNjYxIDM1OC43NTIgMzgwLjY2MSAzNDMuOTQ0QzM4MC42NjEgMzEwLjU3IDM1Mi42MzEgMjg4IDMyNS40NjMgMjg4Wk0zNDguNjY1IDM0My43MzJDMzQ4LjY2NSAzNTAuMTcyIDM0Ni4wNTEgMzU2LjQyNSAzNDEuNjY2IDM2MC43ODFMMjg3Ljk2MyA0MTMuNDY5TDIzNC4yNDQgMzYwLjgxM0MyMjkuODA2IDM1Ni40MyAyMjcuMTAxIDM1MC4wOTMgMjI3LjEwMSAzNDMuNTY3QzIyNy4xMDEgMzMwLjIyMSAyMzguNzExIDMyMC4wMTkgMjUwLjA1NCAzMjAuMDE5QzI1Ni43NzkgMzIwLjAxOSAyNjUuNjk4IDMyMy4xMzMgMjc2LjYxOSAzMzMuOTA2TDI4Ny44NTQgMzQ0Ljk2OUwyOTkuMDg4IDMzMy45MDZDMzEwLjAxIDMyMy4xMzMgMzE4LjkyOSAzMjAuMDE5IDMyNS42NTQgMzIwLjAxOUMzMzIuOTU4IDMyMC4wMTkgMzM3LjY3NCAzMjMuNjkyIDMzOS41NTcgMzI1LjIxOUwzMzkuNjA0IDMyNS4yNUMzNDUuOTQzIDMzMC4zOTMgMzQ4LjY2NSAzMzcuMTYgMzQ4LjY2NSAzNDMuNzMyWk00MjMuOTkyIDc5LjI5N0M0MTUuMzY3IDc5LjI5NyA0MDcuMTkzIDgxLjI1IDM5OS44OTcgODQuNzVDMzk4LjIwOSA1NS4zNzUgMzczLjc4MyAzMiAzNDMuOTgzIDMyQzMzNC4zMjQgMzIgMzI1LjIxNSAzNC40NjkgMzE3LjI3NiAzOC43ODFDMzA5Ljk5NCAxNi4yOTcgMjg4Ljg1MiAwIDI2My45NzMgMEMyMzguOTk4IDAgMjE4LjA1NyAxNi41NTEgMjEwLjg2NiAzOS4xNzRDMjAyLjg1NCAzNC43NDQgMTkzLjc4NCAzMiAxODQgMzJDMTUzLjEyNSAzMiAxMjggNTcuMTI1IDEyOCA4OFYzMDcuODc1TDk3Ljc2NCAyNjguODc1Qzg3LjQ5NSAyNTUuNDQ0IDcxLjM4MiAyNDcuMzU4IDU0LjQ1NCAyNDcuMzU4QzI0Ljg4OSAyNDcuMzU4IDAgMjcwLjQyMSAwIDMwMS44MTVDMCAzMTMuOTU3IDMuODU2IDMyNi4yNzEgMTEuNzIxIDMzNi42MDlMOTguMDc3IDQ1MC4wNzhDMTI1LjcwNSA0ODguODU5IDE3MC42MTggNTEyIDIxOC4yMDEgNTEySDMxOS45OTZDNDA4LjIyNSA1MTIgNDgwIDQ0MC4xMDkgNDgwIDM1MS43NVYxMzUuMzU5QzQ4MCAxMDQuNDUzIDQ1NC44NzEgNzkuMjk3IDQyMy45OTIgNzkuMjk3Wk00NDcuOTk2IDM1MS43NUM0NDcuOTk2IDQyMi40NjkgMzkwLjU4MiA0ODAgMzE5Ljk5NiA0ODBIMjE4LjIwMUMxODAuOTQ2IDQ4MCAxNDUuNzg2IDQ2MS44NzUgMTIzLjg0NiA0MzEuMTA5TDM3LjE5NCAzMTcuMjM0QzMzLjY1OCAzMTIuNTgyIDMxLjkxNiAzMDcuMDggMzEuOTE2IDMwMS43MzVDMzEuOTE2IDI4OC40MyA0Mi40OCAyNzkuMzI4IDU0LjE4IDI3OS4zMjhDNjEuMjI4IDI3OS4zMjggNjguMDAxIDI4Mi42MzIgNzIuMzA3IDI4OC4yODFMMTA3LjI1IDMzNC4yNUMxMTMuNDk5IDM0Mi40NzIgMTIzLjE0NCAzNDcuMTE1IDEzMi44MTIgMzQ3LjExNUMxMzYuODQ0IDM0Ny4xMTUgMTYwLjAxNyAzNDQuNTExIDE2MC4wMTcgMzIwLjk4NkMxNjAuMDE3IDMyMC42NTkgMTYwLjAxMiAzMjAuMzMgMTYwIDMyMFY4OEMxNjAgNzQuNzY2IDE3MC43NjYgNjQgMTg0IDY0UzIwOCA3NC43NjYgMjA4IDg4VjI0MEMyMDggMjQ4Ljg0NCAyMTUuMTU3IDI1NiAyMjQgMjU2QzIzMi44NDQgMjU2IDI0MCAyNDguODQ0IDI0MCAyNDBWODhDMjQwIDg3Ljg5NSAyMzkuOTY5IDg3Ljc5NyAyMzkuOTY5IDg3LjY5MVY1NkMyMzkuOTY5IDQyLjc2NiAyNTAuNzM3IDMyIDI2My45NzMgMzJDMjc3LjIwOSAzMiAyODcuOTc1IDQyLjc2NiAyODcuOTc1IDU2VjI0MEMyODcuOTc1IDI0OC44NDQgMjk1LjEzMyAyNTYgMzAzLjk3NyAyNTZDMzEyLjgyMiAyNTYgMzE5Ljk4MSAyNDguODQ0IDMxOS45ODEgMjQwVjg4QzMxOS45ODEgNzQuNzY2IDMzMC43NDYgNjQgMzQzLjk4MyA2NEMzNTcuMjE5IDY0IDM2Ny45ODYgNzQuNzY2IDM2Ny45ODYgODhWMjM5LjU3OEMzNjcuOTg2IDI0OC40MjIgMzc1LjE0MyAyNTUuNTc4IDM4My45ODggMjU1LjU3OEMzOTIuODMyIDI1NS41NzggMzk5Ljk5IDI0OC40MjIgMzk5Ljk5IDIzOS41NzhWMTM1LjM1OUMzOTkuOTkgMTIyLjA5NCA0MTAuNzU2IDExMS4yOTcgNDIzLjk5MiAxMTEuMjk3UzQ0Ny45OTYgMTIyLjA5NCA0NDcuOTk2IDEzNS4zNTlWMzUxLjc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function HandHeart(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M325.463 288C312.619 288 300.01 292.531 287.854 301.469C275.697 292.531 263.088 288 250.244 288C222.898 288 195.071 310.909 195.071 343.822C195.071 358.724 201.102 373.097 211.838 383.656L269.807 440.5C274.776 445.5 281.322 447.969 287.901 447.969C294.416 447.969 300.947 445.531 305.963 440.656L364.151 383.562C374.738 373.048 380.661 358.752 380.661 343.944C380.661 310.57 352.631 288 325.463 288ZM348.665 343.732C348.665 350.172 346.051 356.425 341.666 360.781L287.963 413.469L234.244 360.813C229.806 356.43 227.101 350.093 227.101 343.567C227.101 330.221 238.711 320.019 250.054 320.019C256.779 320.019 265.698 323.133 276.619 333.906L287.854 344.969L299.088 333.906C310.01 323.133 318.929 320.019 325.654 320.019C332.958 320.019 337.674 323.692 339.557 325.219L339.604 325.25C345.943 330.393 348.665 337.16 348.665 343.732ZM423.992 79.297C415.367 79.297 407.193 81.25 399.897 84.75C398.209 55.375 373.783 32 343.983 32C334.324 32 325.215 34.469 317.276 38.781C309.994 16.297 288.852 0 263.973 0C238.998 0 218.057 16.551 210.866 39.174C202.854 34.744 193.784 32 184 32C153.125 32 128 57.125 128 88V307.875L97.764 268.875C87.495 255.444 71.382 247.358 54.454 247.358C24.889 247.358 0 270.421 0 301.815C0 313.957 3.856 326.271 11.721 336.609L98.077 450.078C125.705 488.859 170.618 512 218.201 512H319.996C408.225 512 480 440.109 480 351.75V135.359C480 104.453 454.871 79.297 423.992 79.297ZM447.996 351.75C447.996 422.469 390.582 480 319.996 480H218.201C180.946 480 145.786 461.875 123.846 431.109L37.194 317.234C33.658 312.582 31.916 307.08 31.916 301.735C31.916 288.43 42.48 279.328 54.18 279.328C61.228 279.328 68.001 282.632 72.307 288.281L107.25 334.25C113.499 342.472 123.144 347.115 132.812 347.115C136.844 347.115 160.017 344.511 160.017 320.986C160.017 320.659 160.012 320.33 160 320V88C160 74.766 170.766 64 184 64S208 74.766 208 88V240C208 248.844 215.157 256 224 256C232.844 256 240 248.844 240 240V88C240 87.895 239.969 87.797 239.969 87.691V56C239.969 42.766 250.737 32 263.973 32C277.209 32 287.975 42.766 287.975 56V240C287.975 248.844 295.133 256 303.977 256C312.822 256 319.981 248.844 319.981 240V88C319.981 74.766 330.746 64 343.983 64C357.219 64 367.986 74.766 367.986 88V239.578C367.986 248.422 375.143 255.578 383.988 255.578C392.832 255.578 399.99 248.422 399.99 239.578V135.359C399.99 122.094 410.756 111.297 423.992 111.297S447.996 122.094 447.996 135.359V351.75Z" />
        </Icon>
    </>
}