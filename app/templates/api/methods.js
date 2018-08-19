
const responseId = (req, res) => {
    const { id } = req.params;
    const responseBody = Array.isArray(id) ? id : [id];
    const statusCode = 202;
    return () => res.status(statusCode).json(responseBody);
};

const handleError = (res) => {
    const statusCode = 500;
    return err => res.status(statusCode).send(err);
};

const respondWithResult = res => entity => res.status(200).json(entity);

const list = Model => (req, res) => Model.find({})
    .then(respondWithResult(res))
    .catch(handleError(res));


const find = Model => (req, res) => Model.findOne({ _id: req.params.id })
    .then(respondWithResult(res))
    .catch(handleError(res));

const removeOne = Model => (req, res) => Model.findOneAndRemove({ _id: req.params.id })
    .then(responseId(req, res))
    .catch(handleError(res));

const create = Model => (req, res) => {
    const user = new Model(req.body);
    return user.save()
        .then(respondWithResult(res))
        .catch(handleError(res));
};

const update = Model => (req, res) => Model
    .findOneAndUpdate({
        _id: req.body._id // eslint-disable-line no-underscore-dangle
    }, req.body)
    .then(respondWithResult(res))
    .catch(handleError(res));

export {
    list,
    find,
    removeOne,
    create,
    update
};
