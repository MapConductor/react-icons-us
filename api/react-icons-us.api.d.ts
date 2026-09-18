/** Map symbols from the us pack. Selection is always explicit. */
declare const UnitedStatesMapIcons: {
    /** United States post office. */
    readonly postOffice: {
        readonly id: "us.post_office";
        readonly pathData: "M12 2 L22 7 L2 7 Z M3 9 L21 9 L21 12 L3 12 Z M4 12 L7 12 L7 19 L4 19 Z M9 12 L12 12 L12 19 L9 19 Z M14 12 L17 12 L17 19 L14 19 Z M19 12 L21 12 L21 19 L19 19 Z M2 19 L22 19 L22 22 L2 22 Z";
        readonly viewBoxSize: 24;
    };
    /** United States police station. */
    readonly policeStation: {
        readonly id: "us.police_station";
        readonly pathData: "M12 2 L21 5 L20 14 C19 19 15 21 12 22 C9 21 5 19 4 14 L3 5 Z";
        readonly viewBoxSize: 24;
    };
    /** United States Interstate highway. */
    readonly interstate: {
        readonly id: "us.interstate";
        readonly pathData: "M3 5 C7 3 9 4 12 2 C15 4 17 3 21 5 L20 14 C19 19 15 21 12 22 C9 21 5 19 4 14 Z";
        readonly viewBoxSize: 24;
    };
};

export { UnitedStatesMapIcons };
