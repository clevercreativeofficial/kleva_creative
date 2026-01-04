
// Configuration matching the case study layout
const defaultCategories = [
    'E-Commerce Redesign',
    'Web Development',
    'Brand Identity',
    'Mobile App',
    'UI/UX Design',
    'SaaS Platform'
];

const defaultHighlights = [
    { label: 'Timeline', value: '12 weeks (Research to Launch)' },
    { label: 'Team', value: 'UX Designer, UI Designer, Front-end Developer' },
    { label: 'Platform', value: 'Shopify Plus' },
    { label: 'Key Metrics', value: '35% conversion increase, 40% bounce rate reduction' }
];

const defaultMetrics = [
    { value: '35%', label: 'Increase in conversion rate' },
    { value: '40%', label: 'Reduction in bounce rate' },
    { value: '28%', label: 'Increase in mobile conversions' }
];

// Initialize form
document.addEventListener( 'DOMContentLoaded', function ()
{
    initializeCategories();
    initializeYears();
    initializeHighlights();
    initializeMetrics();
    initializeImageUploads();
    initializeAddGalleryImages();
    initializeFormSubmit();
    addDefaultSections();
} );

// Category management
function initializeCategories ()
{
    const container = document.getElementById( 'categoryContainer' );
    defaultCategories.forEach( category =>
    {
        const label = document.createElement( 'label' );
        label.className = 'inline-flex items-center cursor-pointer';
        label.innerHTML = `
            <input type="radio" name="category" value="${ category }" class="sr-only peer">
            <span class="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full peer-checked:bg-primary peer-checked:text-white transition-colors">
                ${ category }
            </span>
        `;
        container.appendChild( label );
    } );
}

function addCustomCategory ()
{
    const input = document.getElementById( 'newCategory' );
    const category = input.value.trim();
    if ( category )
    {
        const container = document.getElementById( 'categoryContainer' );
        const label = document.createElement( 'label' );
        label.className = 'inline-flex items-center cursor-pointer';
        label.innerHTML = `
            <input type="radio" name="category" value="${ category }" class="sr-only peer" checked>
            <span class="px-4 py-1.5 bg-primary/10 text-primary text-sm rounded-full peer-checked:bg-primary peer-checked:text-white transition-colors">
                ${ category }
            </span>
        `;
        container.appendChild( label );
        input.value = '';
    }
}

// Year dropdown
function initializeYears ()
{
    const select = document.getElementById( 'project_year' );
    const currentYear = new Date().getFullYear();
    for ( let year = currentYear; year >= 2010; year-- )
    {
        const option = document.createElement( 'option' );
        option.value = year;
        option.textContent = year;
        select.appendChild( option );
    }
}

// Highlight management
let highlightCount = 0;
function initializeHighlights ()
{
    const container = document.getElementById( 'highlightsContainer' );
    defaultHighlights.forEach( ( highlight, index ) =>
    {
        addHighlight( highlight.label, highlight.value );
    } );
}

function addHighlight ( label = '', value = '' )
{
    const container = document.getElementById( 'highlightsContainer' );
    const highlight = document.createElement( 'div' );
    highlight.className = 'grid grid-cols-1 md:grid-cols-2 gap-4 items-end';
    highlight.innerHTML = `
        <div>
            <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Label
            </label>
            <input type="text" name="highlights[${ highlightCount }][label]" value="${ label }"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                placeholder="e.g., Timeline">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Value
            </label>
            <div class="flex gap-2">
                <input type="text" name="highlights[${ highlightCount }][value]" value="${ value }"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                    placeholder="e.g., 12 weeks">
                <button type="button" onclick="this.closest('.grid').remove()" 
                    class="px-3 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                    <i class="fi fi-rr-trash"></i>
                </button>
            </div>
        </div>
    `;
    container.appendChild( highlight );
    highlightCount++;
}

// Metric management
let metricCount = 0;
function initializeMetrics ()
{
    const container = document.getElementById( 'metricsContainer' );
    defaultMetrics.forEach( ( metric, index ) =>
    {
        addMetric( metric.value, metric.label );
    } );
}

function addMetric ( value = '', label = '' )
{
    const container = document.getElementById( 'metricsContainer' );
    const metric = document.createElement( 'div' );
    metric.className = 'space-y-2';
    metric.innerHTML = `
        <div class="relative">
            <div class="absolute top-2 right-2">
                <button type="button" onclick="this.closest('.space-y-2').remove()" 
                    class="text-red-500 hover:text-red-600">
                    <i class="fi fi-rr-cross-small text-sm"></i>
                </button>
            </div>
            <input type="text" name="metrics[${ metricCount }][value]" value="${ value }"
                class="w-full px-4 py-3 text-3xl font-bold text-center border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                placeholder="35%">
            <input type="text" name="metrics[${ metricCount }][label]" value="${ label }"
                class="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 mt-2 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                placeholder="Increase in conversion rate">
        </div>
    `;
    container.appendChild( metric );
    metricCount++;
}

// Section management
let sectionCount = 0;
function addDefaultSections ()
{
    addTextSection( 'Project Overview', 'Write your project overview here...' );
    addTwoColumnSection( 'Research & Analysis' );
    addImageGallerySection( 'Design Solutions' );
    addStatsSection( 'Measurable Results' );
}

function addTextSection ( title = 'New Section', content = '' )
{
    const container = document.getElementById( 'sectionsContainer' );
    const section = document.createElement( 'div' );
    section.className = 'border rounded-xl p-6 dark:border-gray-700 bg-white dark:bg-gray-800/50';
    section.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                <i class="fi fi-rr-text mr-2 text-primary"></i>Text Section
            </h3>
            <button type="button" onclick="this.closest('.border').remove()" 
                class="text-gray-400 hover:text-red-500">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Section Title
                </label>
                <input type="text" name="sections[${ sectionCount }][title]" value="${ title }"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Content
                </label>
                <textarea name="sections[${ sectionCount }][content]" rows="6"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                    placeholder="Write your content here...">${ content }</textarea>
            </div>
            <input type="hidden" name="sections[${ sectionCount }][type]" value="text">
        </div>
    `;
    container.appendChild( section );
    sectionCount++;
}

function addTwoColumnSection ( title = 'Two Column Section' )
{
    const container = document.getElementById( 'sectionsContainer' );
    const section = document.createElement( 'div' );
    section.className = 'border rounded-xl p-6 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50';
    section.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                <i class="fi fi-rr-columns mr-2 text-primary"></i>Two Column Section
            </h3>
            <button type="button" onclick="this.closest('.border').remove()" 
                class="text-gray-400 hover:text-red-500">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Section Title
                </label>
                <input type="text" name="sections[${ sectionCount }][title]" value="${ title }"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary">
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div>
                    <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Left Column Content
                    </label>
                    <textarea name="sections[${ sectionCount }][left_content]" rows="8"
                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                        placeholder="Left column content..."></textarea>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                        Right Column Content
                    </label>
                    <textarea name="sections[${ sectionCount }][right_content]" rows="8"
                        class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                        placeholder="Right column content..."></textarea>
                </div>
            </div>
            <input type="hidden" name="sections[${ sectionCount }][type]" value="two_column">
        </div>
    `;
    container.appendChild( section );
    sectionCount++;
}

function addImageGallerySection ( title = 'Image Gallery' )
{
    const container = document.getElementById( 'sectionsContainer' );
    const section = document.createElement( 'div' );
    section.className = 'border rounded-xl p-6 dark:border-gray-700 bg-white dark:bg-gray-800/50';
    section.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                <i class="fi fi-rr-gallery mr-2 text-primary"></i>Image Gallery Section
            </h3>
            <button type="button" onclick="this.closest('.border').remove()" 
                class="text-gray-400 hover:text-red-500">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Section Title
                </label>
                <input type="text" name="sections[${ sectionCount }][title]" value="${ title }"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Content Above Gallery
                </label>
                <textarea name="sections[${ sectionCount }][content]" rows="4"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                    placeholder="Description for the gallery..."></textarea>
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Gallery Images
                </label>
                <div id="addGalleryContainer" class="grid grid-cols-2 gap-3" id="sectionGallery${ sectionCount }">
                    <div class="aspect-[4/3] rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-primary dark:hover:border-primary flex items-center justify-center cursor-pointer transition-colors">
                        <i class="fi fi-rr-plus translate-y-0.5 mr-1 text-gray-400"></i>
                        <p class="text-gray-400">Add Images</p>
                    </div>
                </div>
            </div>
            <input type="file" id="addGalleryImage" name="sections[${ sectionCount }][type]" value="image_gallery" class="hidden">
            <img id="galleryImagePreview" class="hidden absolute inset-0 w-full h-full object-cover rounded-2xl cursor-pointer">
        </div>
    `;
    container.appendChild( section );
    sectionCount++;
}

function addStatsSection ( title = 'Measurable Results' )
{
    const container = document.getElementById( 'sectionsContainer' );
    const section = document.createElement( 'div' );
    section.className = 'border rounded-xl p-6 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50';
    section.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
                <i class="fi fi-rr-stats mr-2 text-primary"></i>Statistics Section
            </h3>
            <button type="button" onclick="this.closest('.border').remove()" 
                class="text-gray-400 hover:text-red-500">
                <i class="fi fi-rr-trash"></i>
            </button>
        </div>
        <div class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Section Title
                </label>
                <input type="text" name="sections[${ sectionCount }][title]" value="${ title }"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                    Description
                </label>
                <textarea name="sections[${ sectionCount }][content]" rows="3"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 outline-none focus:border-primary dark:focus:border-primary"
                    placeholder="Description of the results..."></textarea>
            </div>
            <input type="hidden" name="sections[${ sectionCount }][type]" value="stats">
        </div>
    `;
    container.appendChild( section );
    sectionCount++;
}

// Image upload management
function initializeImageUploads ()
{
    // Cover image
    const coverDropzone = document.getElementById( 'coverImageDropzone' );
    const coverInput = document.getElementById( 'coverImage' );
    const coverPreview = document.getElementById( 'coverImagePreview' );

    coverPreview.addEventListener( 'click', () => coverInput.click() );
    coverDropzone.addEventListener( 'click', () => coverInput.click() );
    coverInput.addEventListener( 'change', handleCoverImageUpload );

    // Gallery images
    const galleryAddBtn = document.getElementById( 'addGalleryImage' );
    const galleryInput = document.createElement( 'input' );
    galleryInput.type = 'file';
    galleryInput.accept = 'image/*';
    galleryInput.multiple = true;
    galleryInput.className = 'hidden';

    galleryAddBtn.addEventListener( 'click', () => galleryInput.click() );
    galleryInput.addEventListener( 'change', handleGalleryUpload );

    document.body.appendChild( galleryInput );
}

function initializeAddGalleryImages ()
{

    // Add gallery image
    const addGalleryImage = document.getElementById( 'addGalleryImage' );
    const addGalleryContainer = document.getElementById( 'addGalleryContainer' );

    addGalleryContainer.addEventListener( 'click', () => addGalleryImage.click() );
    addGalleryImage.addEventListener( 'change', handleAddGalleryImage );

}

function handleAddGalleryImage ( e )
{
    const file = e.target.files[ 0 ];
    if ( file && file.type.startsWith( 'image/' ) )
    {
        const reader = new FileReader();
        reader.onload = function ( e )
        {
            const galleryImagePreview = document.getElementById( 'galleryImagePreview' );
            const addGalleryContainer = document.getElementById( 'addGalleryContainer' );
            galleryImagePreview.src = e.target.result;
            galleryImagePreview.classList.remove( 'hidden' );
            addGalleryContainer.classList.add( 'hidden' );

        };
        reader.readAsDataURL( file );
    }
}

function handleCoverImageUpload ( e )
{
    const file = e.target.files[ 0 ];
    if ( file && file.type.startsWith( 'image/' ) )
    {
        const reader = new FileReader();
        reader.onload = function ( e )
        {
            const preview = document.getElementById( 'coverImagePreview' );
            const dropzone = document.getElementById( 'coverImageDropzone' );
            preview.src = e.target.result;
            preview.classList.remove( 'hidden' );
            dropzone.classList.remove( 'hidden' );
        };
        reader.readAsDataURL( file );
    }
}

function handleGalleryUpload ( e )
{
    const files = e.target.files;
    const container = document.getElementById( 'galleryContainer' );

    Array.from( files ).forEach( file =>
    {
        if ( file.type.startsWith( 'image/' ) )
        {
            const reader = new FileReader();
            reader.onload = function ( e )
            {
                const imgDiv = document.createElement( 'div' );
                imgDiv.className = 'aspect-[4/3] relative rounded-lg overflow-hidden group';
                imgDiv.innerHTML = `
                    <img src="${ e.target.result }" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button type="button" onclick="this.closest('div').remove()" 
                            class="text-white hover:text-red-300 p-2">
                            <i class="fi fi-rr-trash"></i>
                        </button>
                    </div>
                    <input type="hidden" name="gallery_images[]" value="${ e.target.result }">
                `;
                container.insertBefore( imgDiv, container.firstChild );
            };
            reader.readAsDataURL( file );
        }
    } );
}

// Form submission
function initializeFormSubmit ()
{
    const form = document.getElementById( 'addProjectForm' );
    const saveDraftBtn = document.getElementById( 'saveDraft' );

    form.addEventListener( 'submit', async function ( e )
    {
        e.preventDefault();
        await submitProject( 'published' );
    } );

    saveDraftBtn.addEventListener( 'click', async function ()
    {
        await submitProject( 'draft' );
    } );
}

async function submitProject ( status )
{
    const formData = new FormData( document.getElementById( 'addProjectForm' ) );
    formData.append( 'status', status );

    try
    {
        // Simulate API call
        console.log( 'Submitting project with status:', status );
        const data = Object.fromEntries( formData );
        console.log( 'Form data:', data );

        alert( `Project ${ status === 'draft' ? 'saved as draft' : 'published' } successfully!` );
        // window.location.href = '/projects';
    } catch ( error )
    {
        console.error( 'Error:', error );
        alert( 'Error saving project. Please try again.' );
    }
}

