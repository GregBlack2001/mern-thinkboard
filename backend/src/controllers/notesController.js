
// get all notes
export async function getAllNotes(req, res) {
    res.status(200).send("You just fetched the notes");

};

//Create notes
export async function createNote(req, res) {
    res.status(201).json({message: "Note created sucessfully"});
};

//Update notes
export async function updateNote (req, res){
    res.status(200).json({message: "Note updated sucessfully"});
};

//Delete notes
export async function deleteNote (req, res) {
    res.status(201).json({message: "Note deleted successfully"});
};


