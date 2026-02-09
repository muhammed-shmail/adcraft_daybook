declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

interface Window {
    electronAPI?: {
        readData: () => Promise<any>;
        writeData: (data: any) => Promise<{ success: boolean; error?: string }>;
        getPrinters: () => Promise<any[]>;
        print: (options: { silent?: boolean; device?: string }) => Promise<{ success: boolean; error?: string }>;
        printPDF: (options: { data: string; printer: string }) => Promise<{ success: boolean; error?: string }>;
    };
}
