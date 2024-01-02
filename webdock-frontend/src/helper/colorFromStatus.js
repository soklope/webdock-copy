export const getColorTagFromStatus = (status) => {
    switch (status) {
        case 'My Post':
            return 'tag-my-post-color';
        case 'Review':
            return 'tag-review-color';
        case 'Planned':
            return 'tag-planned-color';
        case 'In_Progress':
            return 'tag-in-progress-color';
        case 'Complete':
            return 'tag-complete-color';
        case 'Deprecated':
            return 'tag-deprecated-color';
        default:
            return '';
    }
}